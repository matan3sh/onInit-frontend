import React from 'react';
import { connect } from 'react-redux';
import { loadCourse, updateCourse } from '../../store/actions/courseActions';
import { Loader } from '../Layout/Loader';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../Shared/Error';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Must have at least four characters')
    .max(24, 'Must be less then 24 characters')
    .required('Must enter a name'),
  category: Yup.string().required('Must pick a category'),
  description: Yup.string()
    .min(24, 'Must have at least 24 characters')
    .max(415, 'Must be shorter then 415 characters')
    .required('Must describe the course in detail'),
  imgCover: Yup.string()
    .url('Must be valid URL')
    .required('Must have image cover at the top of course profile'),
  phone: Yup.string().required('Must enter course phone number'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(24, 'Must be less then 24 characters')
    .required('Must enter an email'),
  website: Yup.string().url('Must be valid URL'),
  price: Yup.number().required('Must enter course price'),
  duration: Yup.number().required(
    'Must inform course the total duration of the course (by hours)'
  ),
  nextCourse: Yup.date()
    .min(new Date(), 'You cannot select a date that has passed')
    .required('You must inform users when the course opens'),
  schoolName: Yup.string()
    .min(4, 'Must have at least four characters')
    .max(24, 'Must be less then 24 characters')
    .required('Must enter school name'),
  schoolEstablished: Yup.number(),
  schoolImg: Yup.string().url('Must be valid URL'),
});

class CourseEdit extends React.Component {
  state = { location: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => this.props.loadCourse(id), 1000);
  }

  render() {
    const { course } = this.props;
    return (
      <section>
        {course === null ? (
          <Loader />
        ) : (
          <>
            <h1 className='large text-primary'>Edit Course</h1>
            <p className='lead'>
              <span>Update course details with their relevant changes</span>
            </p>
            <Formik
              initialValues={{
                name: course.name,
                category: course.category,
                description: course.description,
                imgCover: course.imgCover,
                phone: course.phone,
                email: course.email,
                website: course.website,
                firstImg: '',
                secondImg: '',
                thirdImg: '',
                fourthImg: '',
                price: course.price,
                duration: course.duration,
                nextCourse: course.nextCourse,
                housing: course.housing,
                jobAssistance: course.jobAssistance,
                jobGuarantee: course.jobGuarantee,
                acceptGi: course.acceptGi,
                schoolName: course.school.name,
                schoolDescription: course.school.description,
                schoolEstablished: course.school.established,
                schoolImg: course.school.img,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const {
                  name,
                  schoolName,
                  schoolDescription,
                  schoolEstablished,
                  schoolImg,
                  category,
                  imgCover,
                  email,
                  phone,
                  website,
                  duration,
                  nextCourse,
                  price,
                  description,
                  housing,
                  jobAssistance,
                  jobGuarantee,
                  acceptGi,
                  firstImg,
                  secondImg,
                  thirdImg,
                  fourthImg,
                } = values;
                setSubmitting(true);
                const course = {
                  _id: this.props.course._id,
                  createdAd: Date.now(),
                  name,
                  category,
                  description,
                  addByUser: {
                    _id: this.props.course.addByUser._id,
                    username: this.props.course.addByUser.username,
                    avatar: this.props.course.addByUser.avatar,
                  },
                  school: {
                    name: schoolName,
                    description: schoolDescription,
                    established: schoolEstablished,
                    img: schoolImg,
                  },
                  imgCover,
                  location: this.props.course.location,
                  email,
                  phone,
                  website,
                  duration,
                  nextCourse,
                  price,
                  rating: this.props.course.rating,
                  reviews: this.props.course.reviews,
                  benefits: {
                    housing,
                    jobAssistance,
                    jobGuarantee,
                    acceptGi,
                  },
                  images: [firstImg, secondImg, thirdImg, fourthImg],
                };
                this.props.updateCourse(course);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className='form' onSubmit={handleSubmit}>
                  <div className='contact'>
                    <p className='lead'>
                      <i className='fas fa-info-circle'></i>{' '}
                      <span className='mx-1'>Course Details</span>
                    </p>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        className={
                          touched.name && errors.name ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.name} message={errors.name} />
                    </div>
                    <div className='form-group'>
                      <select
                        name='category'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        className={
                          touched.category && errors.category
                            ? 'has-error'
                            : null
                        }
                      >
                        <option value='' disabled hidden>
                          Choose Category...
                        </option>
                        <option value='Cooking'>Cooking</option>
                        <option value='Consultants'>Consultants</option>
                        <option value='Data'>Data</option>
                        <option value='Design'>Design</option>
                        <option value='Ecommerce'>Ecommerce</option>
                        <option value='Economy'>Economy</option>
                        <option value='Grpahic'>Graphics</option>
                        <option value='Management'>Management</option>
                        <option value='Programming'>Programming</option>
                      </select>
                      <Error
                        touched={touched.category}
                        message={errors.category}
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        type='text'
                        name='description'
                        placeholder='Description'
                        rows='8'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        className={
                          touched.description && errors.description
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.description}
                        message={errors.description}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='imgCover'
                        placeholder='Image Cover URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imgCover}
                        className={
                          touched.imgCover && errors.imgCover
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.imgCover}
                        message={errors.imgCover}
                      />
                    </div>
                  </div>
                  <div className='contact my-1'>
                    <p className='lead'>
                      <i className='fas fa-id-card-alt'></i>{' '}
                      <span className='mx-1'>Contact Information</span>
                    </p>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='phone'
                        placeholder='Phone Number'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        className={
                          touched.phone && errors.phone ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.phone} message={errors.phone} />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='email'
                        placeholder='Email Address'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        className={
                          touched.email && errors.email ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.email} message={errors.email} />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='website'
                        placeholder='Official Website'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.website}
                        className={
                          touched.website && errors.website ? 'has-error' : null
                        }
                      />
                      <Error
                        touched={touched.website}
                        message={errors.website}
                      />
                    </div>
                  </div>
                  <div className='contact my-1'>
                    <p className='lead'>
                      <i className='fas fa-images'></i>{' '}
                      <span className='mx-1'>Photos Display</span>
                      <small className='form-text'>
                        Select images that will attract users to enroll in the
                        course
                      </small>
                    </p>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='firstImg'
                        placeholder='Image URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstImg}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='secondImg'
                        placeholder='Image URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.secondImg}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='thirdImg'
                        placeholder='Image URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.thirdImg}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='fourthImg'
                        placeholder='Image URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.fourthImg}
                      />
                    </div>
                  </div>
                  <div className='contact my-1'>
                    <p className='lead'>
                      <i className='fas fa-registered'></i>{' '}
                      <span className='mx-1'>Registration Specs</span>
                    </p>
                    <div className='form-group'>
                      <input
                        type='number'
                        min='1'
                        name='price'
                        placeholder='Price'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                        className={
                          touched.price && errors.price ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.price} message={errors.price} />
                    </div>
                    <div className='form-group'>
                      <input
                        type='number'
                        name='duration'
                        placeholder='Duration By Minutes'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.duration}
                        className={
                          touched.duration && errors.duration
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.duration}
                        message={errors.duration}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='date'
                        name='nextCourse'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.nextCourse}
                        className={
                          touched.nextCourse && errors.nextCourse
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.nextCourse}
                        message={errors.nextCourse}
                      />
                    </div>
                    <div className='form-group text-center'>
                      <div className='filter btn-light'>
                        Housing{' '}
                        <input
                          className='pointer'
                          type='checkbox'
                          name='housing'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.housing}
                        />
                      </div>
                      <div className='filter btn-light'>
                        Job Assistance{' '}
                        <input
                          className='pointer'
                          type='checkbox'
                          name='jobAssistance'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.jobAssistance}
                        />
                      </div>
                      <div className='filter btn-light'>
                        Job Guarantee{' '}
                        <input
                          className='pointer'
                          type='checkbox'
                          name='jobGuarantee'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.jobGuarantee}
                        />
                      </div>
                      <div className='filter btn-light'>
                        Accepts GI Bill{' '}
                        <input
                          className='pointer'
                          type='checkbox'
                          name='acceptGi'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.acceptGi}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='contact my-1'>
                    <p className='lead'>
                      <i className='fas fa-university'></i>{' '}
                      <span className='mx-1'>About School</span>
                    </p>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='schoolName'
                        placeholder='School Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.schoolName}
                        className={
                          touched.schoolName && errors.schoolName
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.schoolName}
                        message={errors.schoolName}
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        type='text'
                        name='schoolDescription'
                        placeholder='Description'
                        rows='8'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.schoolDescription}
                        className={
                          touched.schoolDescription && errors.schoolDescription
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.schoolDescription}
                        message={errors.schoolDescription}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='number'
                        name='schoolEstablished'
                        min='1950'
                        max='2020'
                        placeholder='Established'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.schoolEstablished}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='schoolImg'
                        placeholder='Logo URL'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.schoolImg}
                        className={
                          touched.schoolImg && errors.schoolImg
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.schoolImg}
                        message={errors.schoolImg}
                      />
                    </div>
                  </div>
                  <input
                    type='submit'
                    style={{ width: '100%' }}
                    className='btn btn-primary'
                    value='Update'
                    disabled={isSubmitting}
                  />
                </form>
              )}
            </Formik>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.courseApp.course,
  };
};

const mapDispatchToProps = {
  loadCourse,
  updateCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
