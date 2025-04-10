import styles from './Navbar.module.scss';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { SearchBar } from './Sub-components/SearchBar';
import { UserDropdown } from './Sub-components/UserDropdown';
import { NavLinks } from './Sub-components/NavLink';
import { IconButton } from './Sub-components/IconButton';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>GGMAX</div>
            <SearchBar />

            <div className={styles.rightArea}>
                <NavLinks />

                <div className={styles.iconGroup}>
                    <IconButton icon={FaBell} />
                    <IconButton icon={FaShoppingCart} />
                    <UserDropdown />
                </div>
            </div>
        </header>
    );
};

export default Navbar;