import { business, creative, tech } from '../courses';
import '../styles/Courses.css'
import CourseCard from './reusable/CourseCard';
function Courses({ setDivbg, setCurriculum }) {
    return (
        <>

            <section className="section">
                <div className="courses">
                    <h2 className="text-center courses-heading text-yellow">Get Access to 25+ Courses</h2>
                    <div className="courses-main">
                        <div className="courses-main-cards">
                            <h3 className="">Technical Courses </h3>
                            <div className="courses-main-cards-inner">
                                {
                                    tech.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                        <div className="courses-main-cards">
                            <h3 className="">Creative/Art Course </h3>
                            <div className="courses-main-cards-inner">
                                {
                                    creative.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                        <div className="courses-main-cards">
                            <h3 className="">Business Course</h3>
                            <div className="courses-main-cards-inner">
                                {
                                    business.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Courses;