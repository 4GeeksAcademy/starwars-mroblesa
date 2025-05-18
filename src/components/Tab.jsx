import { Card } from "./Card"
export const Tab = ({ title }) => {
    return (
        <div className="container-fluid">
            <div className="tab-title">
                <h2>
                    {title}
                </h2>
                <ul class="nav nav-pills mb-4" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="tab1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tab1"
                            type="button"
                        >
                            <div class="tab-content overflow-hidden" id="myTabContent">
                                <div
                                    class="tab-pane slide show active"
                                    id="tab1"
                                    role="tabpanel"
                                >
                                    <div class="card">
                                        <div class="card-body">
                                            Contenido Card 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="tab2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tab2"
                            type="button"
                        >
                            <Card />
                        </button>
                    </li>
                </ul>

            </div>

        </div>
    )
}