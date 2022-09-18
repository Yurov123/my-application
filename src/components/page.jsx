import React,{useState} from "react";
import Navbar from "./navbar";
import Breadcrumbs from "./breadcrumb";


const Page=()=>{
    const [menuItems, setMenuItems] = useState([
        { id: 'main', text: "Главная", active: true },
        { id: 'blog', text: "Блог", active: false },
        { id: 'contact', text: "Контакты", active: false },
    ]);

    

    const handleItemClick = (id) => {
    
        const newMenuItems = menuItems.map((item) =>({
            ...item,
            // Аналог выражения item.id === id ? true : false
            active: item.id === id
          }));
          setMenuItems(newMenuItems);
    };

    const handleSetMainActive =()=>{
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === 'main'
        }));
        setMenuItems(newMenuItems);
    };
    
    const currentActivePage = menuItems.find((item) => item.active);

    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png";
    const siteName="example.com";

   
    return(
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{ width: "280px" }}
        >
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img  src={logoUrl} alt="" className="logo" />
                <span className="fs-4">{siteName}</span>
            </div>
            <hr />
            <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
        </div>
        <div className="p-4">
            <div>
                <Breadcrumbs
                    page={currentActivePage}
                    onGoMain={handleSetMainActive} />
            </div>
            <h1 className="h3">Контент</h1>
        </div>
    </main>
);
};

export default Page;