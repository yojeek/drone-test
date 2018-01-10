import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ rows = [] }) => (
  <div className="m-portlet">
    <div className="m-portlet__head">
      <div className="m-portlet__head-caption">
        <div className="m-portlet__head-title">
          <h3 className="m-portlet__head-text m--hidden-tablet-and-mobile">
            Сети
          </h3>
        </div>
      </div>
      <div className="m-portlet__head-tools">
        <Link to='/networks/new'>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#add">
            Добавить
          </button>
        </Link>
      </div>
    </div>
    <div className="m-portlet__body">
      <div className="m-widget5">
        {rows.map(row => (
          <div className="m-widget5__item" key={row.id}>
            <div className="row">
              <div className="col-sm-3">
                <img className="img-thumbnail" src={row.photo} alt="" />
              </div>
              <div className="col-sm col-9">
                <h5>
                  <Link to={`/salons?network=${row.id}`} className="m-link m--font-bolder">
                    {row.name}
                  </Link>
                </h5>
                <p>
                  Салонов: 0
                </p>
              </div>
              <div className="col-sm col-3 m--align-right">
                <Link to={`/networks/${row.id}`}>
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
