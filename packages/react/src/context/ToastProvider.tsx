import {
  ComponentProps,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { Toast, ToastViewport } from '../components/Toast'
import * as ToastPrimitive from '@radix-ui/react-toast'

export type Position =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

export interface IToast {
  title: string
  content: string
}

export interface IToastProvider
  extends ComponentProps<typeof ToastPrimitive.Provider> {}

export type ToastContextProps = {
  position?: Position
  duration?: number
  children: ReactNode
}

export type ToastContextData = {
  toast: (toast: IToast) => void
}

const ToastContext = createContext({} as ToastContextData)

const ToastProvider = ({
  children,
  position = 'top-right',
  duration = 2000,
}: ToastContextProps) => {
  const [toasts, setToasts] = useState(new Map<string, IToast>())

  const handleAddToast = useCallback((toast: IToast) => {
    setToasts((prev) => {
      const newMap = new Map(prev)
      newMap.set(String(Date.now()), { ...toast })
      return newMap
    })
  }, [])

  const handleRemoveToast = useCallback((key: string) => {
    setToasts((prev) => {
      const newMap = new Map(prev)
      newMap.delete(key)
      return newMap
    })
  }, [])

  const handleDispatch = useCallback(
    (toast: IToast) => handleAddToast(toast),
    [handleAddToast],
  )

  const handleDirection = useMemo(() => {
    if (['top-right', 'bottom-right'].includes(position)) return 'right'
    if (['top-left', 'bottom-left'].includes(position)) return 'left'
    if (position === 'top-center') return 'down'
    return 'up'
  }, [position])

  return (
    <ToastContext.Provider
      value={useMemo(
        () => ({
          toast: handleDispatch,
        }),
        [handleDispatch],
      )}
    >
      {children}
      <ToastPrimitive.Provider
        duration={duration}
        swipeDirection={handleDirection}
      >
        {Array.from(toasts).map(([key, toast]) => (
          <Toast
            onOpenChange={(open) => {
              if (!open) handleRemoveToast(key)
            }}
            key={key}
            {...toast}
          />
        ))}

        <ToastViewport position={position} />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext)
  if (context) return context
  throw new Error('useToast must be used within ToastProvider')
}

export { ToastProvider, useToast }
