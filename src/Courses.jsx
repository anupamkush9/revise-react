import React from "react";
import { Link, Outlet } from "react-router";

const Courses = () => {
    return (
        <div className="Page">
            <h4>You are in the Courses page!</h4>
            <h4>URL: localhost:5173/courses</h4>
            <div>
                <ul>
                    <li>
                        <Link to="/courses/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/courses/list">List</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Courses;
