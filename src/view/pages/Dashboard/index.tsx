import { PieChart } from "@/components/Charts/PieChart"

const Dashboard = () => {

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                    <PieChart />
                </div>
                <div className="col-span-1">
                    <PieChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard