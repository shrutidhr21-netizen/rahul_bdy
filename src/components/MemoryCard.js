import React, { useState } from "react";
import VideoModal from "./VideoModal";

function MemoryCard() {
    const [showModal, setShowModal] = useState(false);

    const memory = {
        id: 2,
        type: "video",
        title: "Memory 2",
        content: "Our special day together ❤️",
        video: "/demo.mp4" // path in public folder
    };

    return (
        <div>
            {/* Card */}
            <div
                className="card"
                onClick={() => setShowModal(true)}
                style={{
                    cursor: "pointer",
                    padding: "20px",
                    borderRadius: "12px",
                    background: "#ffe0e0",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    textAlign: "center",
                    maxWidth: "300px",
                    margin: "20px auto",
                }}
            >
                <h3>{memory.title}</h3>
                <p>{memory.content}</p>
            </div>

            {/* Modal */}
            {showModal && <VideoModal memory={memory} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default MemoryCard;
