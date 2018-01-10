import React from 'react'
import { Link } from 'react-router-dom'
import { Select } from 'ui/select'

const List = ({ networks = [], rows = [] }) => (
  <div className="m-portlet">
    <div className="m-portlet__head">
      <div className="m-portlet__head-caption">
        <div className="m-portlet__head-title">
          <h3 className="m-portlet__head-text m--hidden-tablet-and-mobile">
            Салоны
          </h3>
        </div>
      </div>
      <div className="m-portlet__head-tools">
        <Link to='/salons/new'>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#add">
            Добавить
          </button>
        </Link>
      </div>
    </div>
    <div className="m-portlet__body">
      <div className="m-widget5">
        <div className="m-widget5__item">
          <Select className="form-control " data-live-search="true">
            <option>
              Все сети
            </option>
            {networks.map(network => (
              <option key={network.id} value={network.id}>
                {network.name}
              </option>
            ))}
          </Select>
        </div>
        {rows.map(row => (
          <div className="m-widget5__item" key={row.id}>
            <div className="row">
              <div className="col-sm-3">
                <img className="img-thumbnail" src={row.photo} alt="" />
              </div>
              <div className="col-sm col-9">
                <h5>
                  <a className="m-link m--font-bolder" href="#">
                    {row.name}
                  </a>
                </h5>
                <p>
                  {row.city}, {row.address}
                  <br />
                  Сеть: {row.network.name}
                </p>
              </div>
              <div className="col-sm col-3 m--align-right">
                <Link to={`/salons/${row.id}`}>
                  <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#add">
                    <i className="la la-edit"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default List
