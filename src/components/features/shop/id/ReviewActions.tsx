'use client';
import { DOMAIN } from '@/utils/constants';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import UpdateReview from './UpdateReview';

const ReviewActions = ({ CommentId, comment }: { CommentId: number, comment: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    async function deleteComment(CommentId: number) {
        try {
            const { data } = await axios.delete(`${DOMAIN}/api/comments/${Number(CommentId)}`)
            toast.success(`${data.message}`)

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth="2.5" d="M12 6h.01M12 12h.01M12 18h.01" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col">
                        <button
                            className="text-right px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => { setIsOpen(false); setShowModal(true) }}
                        >
                            تعديل
                        </button>
                        <button
                            className="text-right px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-50"
                            onClick={() => { setIsOpen(false); deleteComment(CommentId) }}
                        >
                            حذف
                        </button>
                    </div>
                </div>
            )}
            {showModal &&
                <UpdateReview showModal={showModal} setShowModal={setShowModal} CommentId={CommentId} comment={comment} />
            }
        </div>
    );
};

export default ReviewActions;