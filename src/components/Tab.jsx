import { Card } from "./Card"
export const Tab = ({ title }) => {
    return (
        <div className="container-fluid">
            <div className="tab-title">
                <h2>
                    {title}
                </h2>
                <Card />

            </div>

        </div>
    )
}