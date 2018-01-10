import React from 'react'
import { Link } from 'react-router-dom'
import { Upload } from 'ui/upload'
import { Image } from 'ui/image'

const Modal = ({ children }) => [
  <div
    className='modal fade show'
    id="add" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    key='modal'
    style={{ display: 'block' }}
  >
    <div className="modal-dialog" role="document">
      {children}
    </div>
  </div>,
  <div className='modal-backdrop fade show' key='backdrop' />
]

const Detail = ({
  id, name, photo, phone, errors = {},
  onChangeName, onChangePhoto, onChangePhone, onSave, onRemove,
}) => (
  <Modal>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Добавление сети
        </h5>
        <Link to='/networks'>
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
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Введите название"
              value={name}
              onChange={({ target }) => onChangeName(target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Фотография</label>
          <div className="col-sm-9">
            <div className="card">
              <Image
                className="card-img-top"
                alt="Card image cap"
                src={photo}
              />
              <div className="card-body">
                <Upload onUpload={onChangePhoto}>
                  <button className="btn btn-primary btn-sm btn-block">Загрузить</button>
                </Upload>
              </div>
            </div>
            {errors.photo &&
              (
                <div className="invalid-feedback" style={{ display: 'block' }}>
                  {errors.photo}
                </div>
              )
            }
          </div>
        </div>
        <fieldset>
          <legend>Уровни цен</legend>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Уроваень 1</label>
            <div className="col-sm-9">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Название" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Уроваень 2</label>
            <div className="col-sm-9">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Название" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">
                    <i className="la la-remove"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Уроваень 3</label>
            <div className="col-sm-9">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Название" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">
                    <i className="la la-remove"></i>
                  </button>
                  <button className="btn btn-success" type="button">
                    <i className="la la-plus"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              placeholder="+7"
              value={phone}
              onChange={({ target }) => onChangePhone(target.value)}
            />
          </div>
        </fieldset>
      </div>
      <div className="modal-footer">
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-success" onClick={onSave}>
              Сохранить
            </button>
            <Link to='/networks'>
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
