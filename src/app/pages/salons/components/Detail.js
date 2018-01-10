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
  id, name, photo, country, city, address, network, errors = {}, networks = [],
  onChangeName, onChangePhoto, onChangeCountry, onChangeCity, onChangeAddress, onChangeNetwork, onSave, onRemove,
}) => (
  <Modal>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Добавление салона
        </h5>
        <Link to='/salons'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              ×
            </span>
          </button>
        </Link>
      </div>
      <div className="modal-body">
        <nav className="nav nav-tabs" role="tablist">
          <a className="nav-item nav-link active" data-toggle="tab" href="#nav-data" role="tab">Данные</a>
          <a className="nav-item nav-link" data-toggle="tab" href="#nav-settings" role="tab">Настройки</a>
        </nav>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="nav-data" role="tabpanel">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Название</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className={`form-control`}
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
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <legend>Местоположение</legend>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Сеть</label>
                    <div className="col-sm-9">
                      <Select
                        className={`form-control m-bootstrap-select m_selectpicker`}
                        data-live-search="true"
                        title="Выберете сеть"
                        value={network}
                        onChange={({ target }) => onChangeNetwork(target.value)}
                      >
                        {networks.map(network => (
                          <option value={network.id} key={network.id}>
                            {network.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Страна</label>
                    <div className="col-sm-9">
                      <Select
                        className="form-control m-bootstrap-select m_selectpicker"
                        data-live-search="true"
                        title="Выберете страну"
                        value={country}
                        onChange={({ target }) => onChangeCountry(target.value)}
                      >
                        <option>
                          Россия
                        </option>
                        <option>
                          Страна 1
                        </option>
                        <option>
                          Страна 2
                        </option>
                      </Select>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Город</label>
                  <div className="col-sm-9">
                    <Select
                      className="form-control m-bootstrap-select m_selectpicker"
                      data-live-search="true"
                      title="Выберете город"
                      value={city}
                      onChange={({ target }) => onChangeCity(target.value)}
                    >
                      <option>
                        Москва
                      </option>
                      <option>
                        Город 1
                      </option>
                      <option>
                        Город 2
                      </option>
                    </Select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Адрес</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Введите адрес"
                        value={address}
                        onChange={({ target }) => onChangeAddress(target.value)}
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                          <i className="la la-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div id="map" style={{ height: "250px" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-settings" role="tabpanel">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <legend>Режим работы</legend>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Пн</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Вт</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Ср</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Чт</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Пт</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Сб</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <label className="m-checkbox m-checkbox--brand">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </span>
                      <span className="input-group-addon" style={{ width: "42px" }}>Вс</span>
                      <input type="text" className="form-control" value="10:00" />
                      <span className="input-group-addon">-</span>
                      <input type="text" className="form-control" value="20:00" />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <legend>Напоминания о записях по&nbsp;умолчанию</legend>
                  <select className="form-control m-bootstrap-select m_selectpicker" title="Выберете время напоминания" multiple>
                    <option>
                      В день визита за 1 час, не позжу 11
                    </option>
                    <option>
                      Опция 1
                    </option>
                    <option>
                      Опция 2
                    </option>
                    <option>
                      Опция 3
                    </option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-success" onClick={onSave}>
              Сохранить
            </button>
            <Link to='/salons'>
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
