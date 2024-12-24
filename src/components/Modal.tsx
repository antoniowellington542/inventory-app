import React from "react"
import { DialogHeader, DialogContent, Dialog, DialogTrigger, DialogTitle, DialogClose } from "./ui/dialog"
import { X } from "lucide-react"

interface ModalProps {
	children: React.ReactNode
	title: string
	rightAction?: React.ReactNode
	actionTrigger: React.ReactNode
    open: boolean
    onClose: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
	const {
		children,
		title,
		actionTrigger,
        open,
        onClose
	} = props

	return (
        <Dialog
            open={open}
        >
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
                    <DialogClose
                        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                        onClick={onClose}    
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
