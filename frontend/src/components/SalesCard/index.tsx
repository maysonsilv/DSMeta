import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>

                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show-996">ID</th>
                        <th className="show-536">Data</th>
                        <th>Vendedor</th>
                        <th className="show-996">Visitas</th>
                        <th className="show-996">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <td className="show-996">#341</td>
                        <td className="show-536">06/09/2022</td>
                        <td>Anakin</td>
                        <td className="show-996">15</td>
                        <td className="show-996">11</td>
                        <td>100.000</td>
                        <td>

                            <div className="dmseta-red-btn-container">
                                <NotificationButton />
                            </div>


                        </td>
                    </tr>
                    <tr>
                        <td className="show-996">#341</td>
                        <td className="show-536">06/09/2022</td>
                        <td>Anakin</td>
                        <td className="show-996">15</td>
                        <td className="show-996">11</td>
                        <td>100.000</td>
                        <td>

                            <div className="dmseta-red-btn-container">
                                <NotificationButton />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="show-996">#341</td>
                        <td className="show-536">06/09/2022</td>
                        <td>Anakin</td>
                        <td className="show-996">15</td>
                        <td className="show-996">11</td>
                        <td>100.000</td>
                        <td>
                            <div className="dmseta-red-btn-container">
                                <NotificationButton />
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>





    )
}

export default SalesCard
