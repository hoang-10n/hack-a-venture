"use client"

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CircleX, Pencil, PencilOff, Trash } from 'lucide-react';

interface IDInfo {
    name: string;
    studentNumber: string;
    major: string;
}

const IDFetch: React.FC = () => {
    // const [idList, setIdList] = useState<IDInfo[]>(() => {
    //     const storedList = localStorage.getItem('idList');
    //     return storedList ? JSON.parse(storedList) : [];
    // });
    const [error, setError] = useState<string | null>(null);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editName, setEditName] = useState<string>('');
    const [editStudentNumber, setEditStudentNumber] = useState<string>('');
    const [editMajor, setEditMajor] = useState<string>('');
    const [newName, setNewName] = useState<string>('');
    const [newStudentNumber, setNewStudentNumber] = useState<string>('');
    const [newMajor, setNewMajor] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isAutoCapture, setIsAutoCapture] = useState<boolean>(false); // New state for auto-capture toggle
    const itemsPerPage = 13;

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => {
                console.error("Error accessing webcam: ", err);
                setError("Could not access the webcam.");
            });
    }, []);

    useEffect(() => {
        if (isAutoCapture) {
            const intervalId = setInterval(() => {
                captureFrame();
            }, 1000); // Capture every 1 second

            return () => clearInterval(intervalId); // Cleanup interval on component unmount or when stopped
        }
    }, [isAutoCapture]);

    const toggleAutoCapture = () => {
        setIsAutoCapture(prevState => !prevState); // Toggle the auto-capture status
    };

    const captureFrame = async () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = canvasRef.current.toDataURL('image/png');

                try {

                } catch (err) {
                    console.error("Error sending data to server: ", err);
                    setError('Failed to fetch data');
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-background">
            <div className="container mx-auto p-6 bg-slate-200 dark:bg-slate-800 bg-opacity-80 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center dark:text-white text-gray-800 mb-4">Plant Scanner</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 w-full p-2">
                        <div className="relative">
                            <video ref={videoRef} autoPlay className="w-full h-auto rounded-lg shadow-md border border-gray-300"></video>

                            {/* Overlay rectangle for aligning the ID card */}
                            <div
                                className="absolute border-4 border-red-500"
                                style={{
                                    top: '50%', // Adjust to position vertically
                                    left: '50%', // Adjust to position horizontally
                                    transform: 'translate(-50%, -50%)',
                                    width: '75%', // Adjust width as needed
                                    height: '65%', // Adjust height as needed
                                    pointerEvents: 'none',
                                }}
                            ></div>

                            {/* Overlay text for error messages */}
                            {error && (
                                <div
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40"
                                    style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {error}
                                </div>
                            )}
                        </div>
                        <canvas ref={canvasRef} width="1280" height="720" className="hidden"></canvas>
                        <div className="flex flex-col sm:flex-row justify-center mt-4">
                            <button
                                onClick={toggleAutoCapture}
                                className={`mb-2 sm:mb-0 sm:mr-4 px-4 py-2 rounded-lg text-white transition ${isAutoCapture ? 'bg-red-500 hover:bg-red-600' : 'bg-[#4896ac] hover:bg-[#326979]'
                                    }`}
                            >
                                {isAutoCapture ? 'Stop Auto Capture' : 'Start Auto Capture'}
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mb-2 sm:mb-0 sm:mr-4 px-8 py-2 bg-[#4896ac] text-white rounded-lg hover:bg-[#326979] transition">
                                Add New ID Manually
                            </button>
                            <button
                                // onClick={exportToCSV}
                                className="mb-2 sm:mb-0 px-4 py-2 bg-[#4896ac] text-white rounded-lg hover:bg-[#326979] transition">
                                Export to CSV
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full p-2">

                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Add New Student</h2>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Full Name"
                                className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
                            />
                            <input
                                type="text"
                                value={newStudentNumber}
                                onChange={(e) => setNewStudentNumber(e.target.value)}
                                placeholder="Student Number"
                                className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
                            />
                            <input
                                type="text"
                                value={newMajor}
                                onChange={(e) => setNewMajor(e.target.value)}
                                placeholder="Major/Program"
                                className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
                            />
                            <div className="flex justify-end">
                                <button onClick={captureFrame} className="px-4 py-2 bg-[#4896ac] text-white rounded-lg hover:bg-[#326979]">
                                    Add Student
                                </button>
                                <button onClick={() => setIsModalOpen(false)} className="ml-2 px-4 py-2 bg-gray-300 rounded-lg">
                                    Cancel
                                </button>
                            </div>
                            {error && <p className="text-red-600 mt-2">{error}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IDFetch;
