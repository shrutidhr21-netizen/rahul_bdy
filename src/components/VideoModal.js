import React from "react";

function VideoModal({ memory, onClose }) {
    if (!memory || memory.type !== "video") return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2 className="modal-title">{memory.title}</h2>
                <video width="100%" controls autoPlay>
                    <source src={memory.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="modal-text">{memory.content}</p>
            </div>
        </div>
    );
}

export default VideoModal;
