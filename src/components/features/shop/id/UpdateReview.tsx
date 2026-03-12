"use client"
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface UpdateReviewProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
    CommentId: number;
    comment: string;
}

const UpdateReview = ({ setShowModal, CommentId, comment }: UpdateReviewProps) => {
    const [newComment, setNewComment] = useState<string>(comment);
    const [loading, setLoading] = useState(false);

    async function updateComment(e: React.FormEvent) {
        e.preventDefault();
        if (!newComment.trim()) return toast.error("لا يمكن ترك التعليق فارغاً");

        setLoading(true);
        try {
            const { data } = await axios.put(`${DOMAIN}/api/comments/${CommentId}`, { comment: newComment });
            toast.success(`${data.message}`);
            setShowModal(false);
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ حاول مرة أخرى");
        } finally {
            setLoading(false);
        }
    }

    return (
        // overlay
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
            {/* Modal */}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all border border-gray-100">

                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 flex items-center gap-2">
                        <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </span>
                        تعديل التعليق
                    </h3>
                    <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={updateComment} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            رسالتك
                        </label>
                        <textarea
                            rows={4}
                            className="w-full rounded-xl border-gray-200 border p-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none shadow-sm placeholder:text-gray-400"
                            placeholder="اكتب تعليقك هنا..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            إلغاء
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : "حفظ التعديلات"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateReview;