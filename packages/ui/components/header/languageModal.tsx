import { darkModeAtom } from '../../atoms/darkMode'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { krImage } from '../../images'
import { enImage } from '../../images/en'
import { Modal } from '../modal'

function LanguageModal({ isLanguageModalOpen, setIsLanguageModalOpen }) {
    const darkMode = useAtomValue(darkModeAtom)
    const router = useRouter()
    const changeLanguage = (language) => {
        router.replace(router.asPath, router.asPath, { locale: language })
        setIsLanguageModalOpen(false)
    }

    return (
        <Modal
            isOpen={isLanguageModalOpen}
            onClose={() => setIsLanguageModalOpen(false)}
            styles={{
                closeIcon: {
                    display: 'none',
                },
            }}
        >
            <div
                className={classNames(
                    'flex h-full w-full flex-col items-center justify-center gap-4 font-bold',
                    darkMode === true
                        ? `bg-stone-700 text-white`
                        : `text-primary-400 bg-white`,
                )}
            >
                <button
                    onClick={() => changeLanguage('ko')}
                    className="group flex items-center gap-2 leading-6 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                >
                    <div className="relative h-4 w-6 overflow-hidden rounded-sm">
                        <Image fill alt="kr" src={krImage} />
                    </div>
                    <span
                        className={classNames(
                            "after:ease-bounce after:block after:h-px after:w-0 after:opacity-90 after:transition-all after:duration-200 after:content-[''] group-hover:after:w-full",
                            darkMode === true
                                ? `after:bg-white`
                                : `after:bg-primary-400`,
                        )}
                    >
                        한국어
                    </span>
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className="group flex items-center gap-2 leading-6 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                >
                    <div className="relative h-4 w-6 overflow-hidden rounded-sm">
                        <Image fill alt="en" src={enImage} />
                    </div>
                    <span
                        className={classNames(
                            "after:ease-bounce after:block after:h-px after:w-0 after:opacity-90 after:transition-all after:duration-200 after:content-[''] group-hover:after:w-full",
                            darkMode === true
                                ? `after:bg-white`
                                : `after:bg-primary-400`,
                        )}
                    >
                        English
                    </span>
                </button>
            </div>
        </Modal>
    )
}

export default LanguageModal
