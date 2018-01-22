import React from 'react'
import { Link } from 'react-router-dom'
import { Upload } from 'ui/upload'
import { Image } from 'ui/image'
import { Select } from 'ui/select'

const Modal = ({ children }) => [
  <div
    className='modal fade show'
    id='add'
    tabIndex='-1'
    role='dialog'
    aria-labelledby='exampleModalLabel'
    aria-hidden='true'
    key='modal'
    style={{ display: 'block' }}
  >
    <div className='modal-dialog modal-lg' role='document'>
      {children}
    </div>
  </div>,
  <div className='modal-backdrop fade show' key='backdrop' />,
]

const Detail = ({ model, errors = {}, onChange, onSave, onRemove }) => (
  <Modal>
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalLabel'>
          Добавление сотрудника
        </h5>
        <Link to='/employees'>
          <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>×</span>
          </button>
        </Link>
      </div>
      <div className='modal-body'>
        <nav className='nav nav-tabs'>
          <a className='nav-item nav-link active' data-toggle='tab' href='#nav-data' role='tab'>Данные</a>
          <a className='nav-item nav-link' data-toggle='tab' href='#nav-salons' role='tab'>Салоны</a>
          <a className='nav-item nav-link' data-toggle='tab' href='#nav-services' role='tab'>Услуги</a>
          <a className='nav-item nav-link' data-toggle='tab' href='#nav-time' role='tab'>График работы</a>
        </nav>
        <div className='tab-content'>
          <div className='tab-content'>
            <div className='tab-pane fade show active' id='nav-data' role='tabpanel'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Фамилия</label>
                    <div className='col-lg-7 col-sm-8'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Введите фамилию'
                        value={model.lastName}
                        onChange={({ target }) => onChange('lastName', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Имя</label>
                    <div className='col-lg-7 col-sm-8'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Введите имя'
                        value={model.firstName}
                        onChange={({ target }) => onChange('firstName', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Должность</label>
                    <div className='col-lg-7 col-sm-8'>
                      <select className='form-control m-bootstrap-select m_selectpicker' title='Выберете должность'>
                        <option>
                          Должность 1
                        </option>
                        <option>
                          Должность 2
                        </option>
                        <option>
                          Должность 3
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Специализация <span
                      className='info ml-2'
                      data-toggle='m-tooltip'
                      data-placement='top'
                      data-original-title='Отображается клиентам и в журнале записи. Если пусто выводится должность.'
                    >
                      <i className='la la-info-circle' />
                    </span>
                    </label>
                    <div className='col-lg-7 col-sm-8'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Введите специализацию'
                        value={model.specialization}
                        onChange={({ target }) => onChange('specialization', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Номер телефона</label>
                    <div className='col-lg-7 col-sm-8'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Введите номер телефона'
                        value={model.phone}
                        onChange={({ target }) => onChange('phone', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>E-mail</label>
                    <div className='col-lg-7 col-sm-8'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Введите e-mail'
                        value={model.email}
                        onChange={({ target }) => onChange('email', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Примечание</label>
                    <div className='col-lg-7 col-sm-8'>
                      <textarea
                        className='form-control'
                        placeholder='Введите примечание'
                        rows='4'
                        value={model.notes}
                        onChange={({ target }) => onChange('notes', target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Профиль доступа</label>
                    <div className='col-lg-7 col-sm-8'>
                      <select
                        className='form-control m-bootstrap-select m_selectpicker'
                        title='Выберете профиль доступа'
                      >
                        <option>
                          Профиль 1
                        </option>
                        <option>
                          Профиль 2
                        </option>
                        <option>
                          Профиль 3
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5'>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Фотография</label>
                    <div className='col-lg-7 col-sm-4'>
                      <div className='card'>
                        <img
                          className='card-img-top'
                          alt='Card image cap'
                        />
                        <div className='card-body'>
                          <button className='btn btn-danger btn-sm btn-block'>Удалить</button>
                          <button className='btn btn-primary btn-sm btn-block'>Загрузить</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='form-group row mb-4'>
                    <label className='col-lg-5 col-sm-4 col-form-label'>Дата приема на&nbsp;работу</label>
                    <div className='col-lg-7 col-sm-4'>
                      <div className='input-group date' id='datepicker'>
                        <input
                          type='date'
                          className='form-control m-input'
                          value={model.hiredAt}
                          onChange={({ target }) => onChange('hiredAt', target.value)}
                        />
                        <span className='input-group-addon'>
                          <i className='la la-calendar-check-o' />
                        </span>
                      </div>
                    </div>
                  </div>
                  {model.id && (
                    <div className='form-group row mb-4'>
                      <div className='col-lg-5 col-sm-4 col-form-label'>
                        <label className='m-checkbox m-checkbox--brand m-0'>
                          <input type='checkbox' readOnly />
                          Уволен
                          <span />
                        </label>
                      </div>
                      <div className='col-lg-7 col-sm-4'>
                        <div className='input-group date' id='datepicker-1'>
                          <input
                            type='text'
                            className='form-control m-input'
                            readOnly
                            value={model.firedAt}
                            onChange={({ target }) => onChange('firedAt', target.value)}
                          />
                          <span className='input-group-addon'>
                          <i className='la la-calendar-check-o' />
                        </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='form-group'>
                    <label className='m-checkbox m-checkbox--brand m-0'>
                      <input
                        type='checkbox'
                        value={model.display}
                        onChange={({ target }) => onChange('display', target.value)}
                      />
                      Отображается в журнале записи
                      <span />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label className='m-checkbox m-checkbox--brand m-0'>
                      <input
                        type='checkbox'
                        value={model.available}
                        onChange={({ target }) => onChange('available', target.value)}
                      />
                      Доступен для онлайн-записи
                      <span />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <div className='row'>
          <div className='col-auto'>
            <button type='button' className='btn btn-success' onClick={onSave}>
              Сохранить
            </button>
            <Link to='/employees'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>
                Закрыть
              </button>
            </Link>
          </div>
          <div className='col-auto ml-auto'>
            {model.id && (
              <button type='button' className='btn btn-outline-danger' onClick={onRemove}>
                <span className='m--hidden-mobile'>Удалить</span>
                <span className='m--visible-mobile'>
                  <i className='la la-trash' />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </Modal>
)

export default Detail
