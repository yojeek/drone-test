import React from 'react'
import { Link } from 'react-router-dom'
import { Upload } from 'ui/upload'
import { Image } from 'ui/image'
import { Select } from 'ui/select'

const Modal = ({ children }) => [
  <div
    className='modal fade show'
    id="add" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    key='modal'
    style={{ display: 'block' }}
  >
    <div className="modal-dialog modal-lg" role="document">
      {children}
    </div>
  </div>,
  <div className='modal-backdrop fade show' key='backdrop' />
]

const Detail = ({
  id, name, description, errors = {},
  onChangeName, onChangeDescription, onSave, onRemove,
}) => (
  <Modal>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Добавление должности
        </h5>
        <Link to='/positions'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              ×
            </span>
          </button>
        </Link>
      </div>
      <div className="modal-body">
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Название</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Введите название должности"
              value={name}
              onChange={({ target }) => onChangeName(target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Описание</label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              placeholder="Введите описание должности"
              rows="6"
              value={description}
              onChange={({ target }) => onChangeDescription(target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-success" onClick={onSave}>
              Сохранить
            </button>
            <Link to='/positions'>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Закрыть
              </button>
            </Link>
          </div>
          <div className="col-auto ml-auto">
            {id &&
              (
                <button type="button" className="btn btn-outline-danger" onClick={onRemove}>
                  <span className="m--hidden-mobile">Удалить</span>
                  <span className="m--visible-mobile">
                    <i className="la la-trash"></i>
                  </span>
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  </Modal>
)

export default Detail
