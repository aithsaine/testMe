"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
    LuActivity,
    LuFlaskRound,
    LuHome,
    LuLayoutDashboard,
    LuLogOut,
    LuUserCircle,
} from "react-icons/lu";
import axios from "axios";
import { getAllQuestions } from "@/redux/action/actionCreator";
import Loader from "@/components/Loader";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { data } = useSession();
    const dispatch = useDispatch();

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const resp = await axios.get("/api/questions");
                dispatch(getAllQuestions(resp.data.questions, resp.data.answers ?? []));
            } catch (error) {
                console.error(error);
            }
        };
        getQuestions();
    }, []);

    if (!data?.user) {
        return <Loader />;
    }

    return (
        <div className="flex py-4 items-start mt-2 px-6 overflow-auto h-screen space-x-4 justify-center text-white">
            <aside
                style={{
                    width: "70px",
                    backdropFilter: "blur(40px)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                }}
                className="flex flex-col rounded-xl h-full py-4 space-y-6 bg-gradient-to-b from-gray-800 to-black"
            >
                <NavItem href="/dashboard" icon={<LuLayoutDashboard />} label="Dashboard" />
                <NavItem href="/" icon={<LuHome />} label="Home" />
                <NavItem href="/dashboard/tests" icon={<LuFlaskRound />} label="Tests" />
                <NavItem icon={<LuUserCircle />} label="Profile" />
                <NavItem icon={<LuActivity />} label="Activities" />
                <NavItem
                    onClick={() => signOut({ callbackUrl: "/" })}
                    icon={<LuLogOut />}
                    label="Log Out"
                />
            </aside>

            <main
                style={{
                    backdropFilter: "blur(40px)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                className="w-full overflow-scroll p-4 h-full rounded-xl bg-gradient-to-r from-gray-900 to-black"
            >
                <div className="text-2xl text-gray-300 flex justify-center items-center mb-6">
                    Hello <FaHandHoldingHeart className="w-6 mx-2 text-pink-400" />{" "}
                    {data?.user?.firstname} {data?.user?.lastname}
                </div>
                {children}
            </main>
        </div>
    );
};

const NavItem = ({
    href,
    icon,
    label,
    onClick,
}: {
    href?: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}) => (
    <Link
        href={href || "#"}
        onClick={onClick}
        className="relative flex items-center justify-center group cursor-pointer"
    >
        <div className="text-3xl group-hover:text-gray-400 transition-colors">
            {icon}
        </div>
        <span className="absolute left-full ml-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
        </span>
    </Link>
);

export default RootLayout;
