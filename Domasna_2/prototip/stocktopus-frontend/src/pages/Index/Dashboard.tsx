import React from 'react';
import styles from './Dashboard.module.css';
import { StockCard } from '../../components/StockCard';
import { FavoriteItem } from '../../components/FavoriteItem';
import { TransactionBar } from '../../components/TransactionBar';
import { UserProfile } from '../../components/UserProfile';
import Navigation from "../../components/navigation/Navigation.tsx";
import logo from '../../assets/logo.png';
import {Footer} from "../../components/footer/Footer.tsx";

const stockData = [
    { rank: "1", symbol: "KMB", percentage: "+8% from yesterday" },
    { rank: "2", symbol: "GTC", percentage: "+5% from yesterday" },
    { rank: "3", symbol: "ALK", percentage: "+1,2% from yesterday" },
    { rank: "4", symbol: "ADIN", percentage: "0,5% from yesterday" }
];

const favoriteData = [
    { rank: "01", symbol: "ALK", maxPrice: "25.218,05", avgPrice: "25.218,05" },
    { rank: "02", symbol: "STB", maxPrice: "25.218,05", avgPrice: "25.218,05" },
    { rank: "03", symbol: "KMB", maxPrice: "25.218,05", avgPrice: "25.218,05" },
    { rank: "04", symbol: "TTK", maxPrice: "25.218,05", avgPrice: "25.218,05" }
];

const transactionData = [
    { year: "2018", height: 79 },
    { year: "2019", height: 89 },
    { year: "2020", height: 36 },
    { year: "2021", height: 41 },
    { year: "2022", height: 36 },
    { year: "2023", height: 62 }
];
const sidebarItems = [
    { label: 'Home Page', path: '/', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3a442f00011bfdbf7a7cab35a09d701dda8da4ee43a4154bdc25a8467e88124b?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078', isActive: false },
    { label: 'Admin Dashboard', path: '/admin/stockdetails', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f82a8295d3dcfe19d1110553350c5151b3590b9747973a89f58114ed3ae4775d?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078', isActive: false },
    { label: 'Favorites', path: '/favorites', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e5e2117fd75d3701dbf88f7e792aa11874d249c73d02332b8a2aaed30bc7475c?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078', isActive: false },
    { label: 'AI Predictor', path: '/predictor', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9857e2e6d9091abf3f92f025fee0e2f66291bd116bf07d3836751ece1b8653e8?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078', isActive: false },
    { label: 'Sign out', path: '/login', icon: 'https://img.icons8.com/?size=100&id=100528&format=png&color=000000', isActive: false },
];

export const Dashboard: React.FC = () => {
    return (
        <main className={styles.dashboardDesign}>
            <div className={styles.layout}>
                <nav className={styles.sidebar}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Stocktopus logo" className={styles.logoImage} />
                        <h1 className={styles.logoText}>Stocktopus</h1>
                    </div>

                    <Navigation items={sidebarItems}/>
                </nav>

                <div className={styles.mainContent}>
                    <header className={styles.header}>


                        <div className={styles.searchWrapper}>
                            <form className={styles.searchForm} role="search">
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/179581b66afe025dc77ca49045dc08f9859e92dee37dd974a66344b3140b3b04?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078" alt="" className={styles.searchIcon} />
                                {/*<label htmlFor="search" className="visually-hidden">Search</label>*/}
                                <input
                                    id="search"
                                    type="search"
                                    placeholder="Search here..."
                                    className={styles.searchInput}
                                />
                            </form>

                            {/*<div className={styles.language}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09cb39a3457af96de902bd6884bfeb3762ec6198d43f45c770062ee7e5eb6e00?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078" alt="" className={styles.langIcon} />
                                <span>Eng (US)</span>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9870da67962d92d40bdc46532f5a27ce8a7dfceb3d69ebf9ec337cfad4f19f5b?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078" alt="" className={styles.dropdownIcon} />
                            </div>*/}
                        </div>

                        <UserProfile
                            name="Gordana"
                            role="Admin"
                            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1755c11e7b6a7afcce83903ab9166d8511e788b72277ae143f1158a138de7f56?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078"
                        />
                    </header>

                    <section className={styles.stockSection}>
                        <div className={styles.sectionHeader}>
                            <div>
                                <h2 className={styles.sectionTitle}>Today's Top</h2>
                                <p className={styles.sectionSubtitle}>Summary</p>
                            </div>
                            <button className={styles.exportButton}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/81a93e587ed429cf259b108714e158e446413fc36bc8019d880dc1a4b0c628d8?placeholderIfAbsent=true&apiKey=daff80472fc549e0971c12890da5e078" alt="" />
                                Export
                            </button>
                        </div>

                        <div className={styles.stockGrid}>
                            {stockData.map((stock) => (
                                <StockCard key={stock.rank} {...stock} />
                            ))}
                        </div>
                    </section>

                    <section className={styles.favoritesSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Favourites</h2>
                            <div className={styles.columnHeaders}>
                                <span>#</span>
                                <span>Name</span>
                                <span>Maximum price</span>
                                <span>Avg. price</span>
                            </div>
                        </div>

                        <div className={styles.favoritesList}>
                            {favoriteData.map((favorite) => (
                                <FavoriteItem key={favorite.rank} {...favorite} />
                            ))}
                        </div>
                    </section>

                    <section className={styles.transactionsSection}>
                        <h2 className={styles.sectionTitle}>Number of transactions</h2>
                        <div className={styles.transactionBars}>
                            {transactionData.map((transaction) => (
                                <TransactionBar key={transaction.year} {...transaction} />
                            ))}
                        </div>
                        <div className={styles.transactionTotal}>
                            <div className={styles.totalIndicator} />
                            <span className={styles.totalLabel}>Num. of transactions</span>
                            <span className={styles.totalValue}>7.560</span>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </main>
    );
};