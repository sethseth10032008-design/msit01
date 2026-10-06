import  Header from "./components/Header";
import  Footer from "./components/Footer";
import  Product from "./components/Product";
import {courses} from "./data/course";
function App() {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
       <Header/>
        {/* Products */}
        <section className="products">

          {/* <Product title="Adobe After Effects" p="kdm yuth" d="30$" img="p1.png"/>
          <Product title="Adobe Photoshop" p="kdm yuth" d="25$" img="p2.png"/>
          <Product title="Adobe Illustrator" p="kdm yuth" d="20$" img="p3.png"/>
          <Product title="Adobe Premiere Pro" p="kdm yuth" d="35$" img="p4.png"/> */}
{courses.map((course)=>(
  <Product
   key={course.id}
   title={course.title}
   des={course.description}
   img={course.image}
   price={course.price}
   soldout={course.soldout}
/>
))}
        </section>

        {/* Bottom */}
       <Footer/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
