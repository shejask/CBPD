import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link  from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home Page 01',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home Page 02',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home Page 03',
                link: '/home-3'
            },
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About',
                link: '/about'
            },
            {
                id: 34,
                title: 'Team',
                link: '/team'
            },
            {
                id: 35,
                title: 'Team Single',
                link: '/team-single/Jone-Willsone'
            },
            {
                id: 36,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 37,
                title: '404',
                link: '/404'
            }
        ]
    },

    {
        id: 4,
        title: 'Services',
        link: '/service',
        submenu: [
            {
                id: 41,
                title: 'Services',
                link: '/service',
            },
            {
                id: 42,
                title: 'Service Style 2',
                link: '/service-s2'
            },
            {
                id: 425,
                title: 'Service Style 3',
                link: '/service-s3'
            },
            {
                id: 43,
                title: 'Service Single',
                link: '/service-single/Website-Development'
            },
        ]
    },
    {
        id: 7,
        title: 'Projects',
        link: '/projects',
        submenu: [
            {
                id: 71,
                title: 'Projects',
                link: '/projects'
            },
            {
                id: 72,
                title: 'Projects style 2',
                link: '/projects-s2'
            },
            {
                id: 73,
                title: 'Projects style 3',
                link: '/projects-s3'
            },
            {
                id: 74,
                title: 'Projects style 4',
                link: '/projects-s4'
            },
            {
                id: 74,
                title: 'Project single',
                link: '/project-single/Business-Growth-System'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog Grid',
                link: '/blog'
            },
            {
                id: 51,
                title: 'Blog Grid Style 2',
                link: '/blog-style-2'
            },
            {
                id: 52,
                title: 'Blog Right sidebar',
                link: '/blog-right-sidebar'
            },
            {
                id: 58,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/The-Most-Popular-New-Top-Business-Design'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/The-Most-Popular-New-Top-Business-Design'
            },
            {
                id: 56,
                title: 'Blog single full width',
                link: '/blog-single-fullwidth/The-Most-Popular-New-Top-Business-Design'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="close" onClick={() => setMenuState(!menuActive)}><i className="icon-02"></i></div>
                </div>
                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'icon-07' : 'icon-07'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;