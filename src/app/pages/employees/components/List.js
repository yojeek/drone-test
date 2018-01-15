import React from 'react'
import { Link } from 'react-router-dom'
import { Select } from 'ui/select'

const List = ({ networks = [], rows = [], onChangeNetwork }) => (
  <div className='m-portlet'>
    <div className='m-portlet__head'>
      <div className='m-portlet__head-caption'>
        <div className='m-portlet__head-title'>
          <h3 className='m-portlet__head-text m--hidden-tablet-and-mobile'>
            Сотрудники
          </h3>
        </div>
      </div>
      <div className='m-portlet__head-tools'>
        <Link to='/employees/new'>
          <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#add'>
            Добавить
          </button>
        </Link>
      </div>
    </div>
    <div className='m-portlet__body'>
      <div className='m-widget5'>
        {rows.map(row => (
          <div className='m-widget5__item' key={row.id}>
            <div className='row'>
              <div className='col-3 col-sm-2'>
                <img className='img-thumbnail' src={row.photo} alt='' />
              </div>
              <div className='col-6 col-sm-8'>
                <h5>
                  <a className='m-link m--font-bolder' href='#'>
                    {row.firstName} {row.lastName}
                  </a>
                </h5>
                <p>
                  {row.specialization}
                  <br />
                  {row.phone}
                </p>
              </div>
              <div className='col-3 col-sm-2 m--align-right'>
                <Link to={`/employees/${row.id}`}>
                  <button type='button' className='btn btn-success btn-sm' data-toggle='modal' data-target='#add'>
                    <i className='la la-edit' />
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
