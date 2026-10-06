
function Footer() {
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  return (
   <div className="bottom">
          <p>ចុចទីនេះ ដើម្បីចុះឈ្មោះ</p>
          <button>ចុះឈ្មោះ</button>
          {isopen ? 
          <p>យើងបើកនៅម៉ោង{openhour}:00AM ដល់ម៉ោង {closehour}:00PM</p> :
          <p>យើងបិទនៅម៉ោង{closehour}:00PM ដល់ម៉ោង {openhour}:00AM</p>
          }
        </div>
  )
}

export default Footer