'use client'
import { siYuan } from '@/assets/font'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type Player = 'X' | 'O'
type Cell = Player | null
type Step = { player: Player; index: number }

export default function StudyPage() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null))
  const [history, setHistory] = useState<Step[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [winner, setWinner] = useState<Player | 'draw' | null>(null)

  const checkWinner = (currentBoard: Cell[]): Player | 'draw' | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖
      [0, 4, 8], [2, 4, 6] // 斜
    ]

    for (const [a, b, c] of lines) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a]
      }
    }

    // 检查平局 - 满格但没赢（理论上不会发生，因为棋子会消失）
    if (!currentBoard.includes(null)) {
      return 'draw'
    }

    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    const newHistory = [...history, { player: currentPlayer, index }]

    // 如果当前玩家已经有 3 颗棋子了，移除最早的那一颗
    const playerSteps = newHistory.filter(s => s.player === currentPlayer)
    if (playerSteps.length > 3) {
      const oldestStep = playerSteps[0]
      newBoard[oldestStep.index] = null
      // 从 history 中移除
      const oldestIndex = newHistory.findIndex(s => s === oldestStep)
      newHistory.splice(oldestIndex, 1)
    }

    setBoard(newBoard)
    setHistory(newHistory)

    // 检查胜负
    const result = checkWinner(newBoard)
    if (result) {
      setWinner(result)
      return
    }

    // 换玩家
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setHistory([])
    setCurrentPlayer('X')
    setWinner(null)
  }

  const getPlayerStepsCount = (player: Player) => {
    return history.filter(s => s.player === player).length
  }

  return (
    <div className={`${siYuan.className} min-h-[80vh] py-12 px-6`}>
      <div className="max-w-sm mx-auto">
        {/* 标题 */}
        <header className="text-center mb-8">
          <div className="w-12 h-px bg-accents3 mx-auto mb-4"></div>
          <h2 className="text-2xl font-medium text-accents7 tracking-wide">Dynamic Tic-Tac-Toe</h2>
          <p className="mt-2 text-accents5 text-sm">
            动态井字棋 · 每人最多三颗棋子，超出后最早的会消失
          </p>
          <div className="w-12 h-px bg-accents3 mx-auto mt-4"></div>
        </header>

        {/* 游戏信息 */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className={`px-4 py-2 rounded-full border ${currentPlayer === 'X' ? 'bg-accents1 border-accents3' : 'border-transparent'}`}>
            <span className={`text-sm font-medium ${currentPlayer === 'X' ? 'text-accents8' : 'text-accents4'}`}>
              X ({getPlayerStepsCount('X')}/3)
            </span>
          </div>
          <div className={`px-4 py-2 rounded-full border ${currentPlayer === 'O' ? 'bg-accents1 border-accents3' : 'border-transparent'}`}>
            <span className={`text-sm font-medium ${currentPlayer === 'O' ? 'text-accents8' : 'text-accents4'}`}>
              O ({getPlayerStepsCount('O')}/3)
            </span>
          </div>
        </div>

        {/* 棋盘 */}
        <div className="relative aspect-square border border-accents2 rounded-lg p-2 bg-accents1/30">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full w-full">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={cell !== null || winner !== null}
                className={`
                  relative bg-background border-2 rounded-md
                  ${cell === null ? 'border-accents2 hover:border-accents4 transition-colors' : 'border-accents4'}
                  ${cell === null && !winner ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                <AnimatePresence>
                  {cell && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`absolute inset-0 flex items-center justify-center text-3xl font-bold ${cell === 'X' ? 'text-mocha' : 'text-sky-500'}`}
                    >
                      {cell}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>

        {/* 结果信息 */}
        <AnimatePresence>
          {winner && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <div className="inline-block px-6 py-3 rounded-lg bg-accents1 border border-accents2">
                <p className="text-lg text-accents7">
                  {winner === 'draw'
                    ? '平局！再来一局？'
                    : `${winner} 获胜！`
                  }
                </p>
                <button
                  onClick={restartGame}
                  className="mt-3 px-6 py-2 bg-mocha text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  重新开始
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 规则说明 */}
        <div className="mt-10 text-center text-accents5 text-sm leading-relaxed">
          <p className="mb-2"><strong>规则说明</strong></p>
          <p>双方轮流落子，每人最多保留三颗棋子</p>
          <p>下第四颗时，自己最早下的那颗会自动消失</p>
          <p>先连成一线者获胜</p>
        </div>
      </div>
    </div>
  )
}
