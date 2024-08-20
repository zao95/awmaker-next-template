import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import _Modal from 'react-responsive-modal'
import { darkModeAtom } from '../atoms'
import { palette } from 'utils'
import classNames from 'classnames'

interface Styles {
    root?: React.CSSProperties
    overlay?: React.CSSProperties
    modalContainer?: React.CSSProperties
    modal?: React.CSSProperties
    closeButton?: React.CSSProperties
    closeIcon?: React.CSSProperties
}
interface ModalProps {
    isOpen: boolean
    onClose: () => void
    styles?: Styles
    className?: string
    children: ReactNode
}
export function Modal({
    isOpen,
    onClose,
    styles = {},
    className = '',
    children,
}: ModalProps) {
    const darkMode = useAtomValue(darkModeAtom)

    return (
        <_Modal
            open={isOpen}
            onClose={() => onClose()}
            styles={{
                ...styles,
                modalContainer: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...styles.modalContainer,
                },
                modal: {
                    backgroundColor:
                        darkMode === true ? palette.stone[700] : palette.white,
                    padding: '16px 16px 16px 16px',
                    minWidth: '120px',
                    borderRadius: '8px',
                    ...styles.modal,
                },
                closeIcon: {
                    fill:
                        darkMode === true ? palette.white : palette.stone[900],
                    ...styles.closeIcon,
                },
            }}
        >
            <div
                className={classNames(
                    'react-responsive-modal-inner-container',
                    className,
                )}
            >
                {children}
            </div>
        </_Modal>
    )
}
