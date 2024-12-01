import './App.css';
import {AdminDashboard} from "./pages/AdminDashboard/AdminDashboard.tsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Index/Dashboard.tsx";

function App() {
    /*const [items, setItems] = useState<StockDetailsDTO[]>([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(25);

    function handleChangePage(_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setSize(parseInt(event.target.value, 10));
        setPage(0);
    }

    useEffect(() => {
        loadItems();
    }, [page, size]);

    const loadItems = async () => {
        const response = await getItems({ page, size });
        setItems(response);
    };

 /!*   const handleEdit = () => {
        // Handle edit logic
    };

    const handleDelete = () => {
        // Handle delete logic
    };*!/*/

    return (
        <div className="App">
        {/*    {items.map((item) => (
                <TableRow
                    key={`${item.id}`}
                    item={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={size}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />*/}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
}

export default App;