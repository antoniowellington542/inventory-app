import React from "react"
import { DialogHeader, DialogContent, Dialog, DialogTrigger, DialogTitle } from "./ui/dialog"

interface ModalProps {
	children: React.ReactNode
	title: string
	rightAction?: React.ReactNode
	actionTrigger: React.ReactNode
}

const Modal: React.FC<ModalProps> = (props) => {
	const {
		children,
		title,
		actionTrigger
	} = props

	return (
        <Dialog>
            <DialogTrigger asChild>
                {actionTrigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                </DialogHeader>
                	{children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal
