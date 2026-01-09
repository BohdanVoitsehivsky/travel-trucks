"use client";


export default function Filters() {
    return (
        <aside>
           <div>
        <label>Location</label>
        <input type="text" placeholder="Kyiv, Ukraine" />
      </div> 

      <h2>Filters</h2>

    

      <div>
        <h3>Vehicle equipment</h3>

        <label>
          <input type="checkbox" value="AC" />
          AC
        </label>

        <label>
          <input type="checkbox" value="automatic" />
          Automatic
        </label>

        <label>
          <input type="checkbox" value="kitchen" />
          Kitchen
        </label>

        <label>
          <input type="checkbox" value="TV" />
          TV
        </label>

        <label>
          <input type="checkbox" value="bathroom" />
         Bathroom
        </label>
      </div>

      <div>
        <h3>Vehicle type</h3>

        <label>
            <input type="radio" name="form" value="van"/>
            Van
        </label>

        <label>
            <input type="radio" name="form" value="fully-integrated"/>
           Fully Integrated
        </label>

        <label>
            <input type="radio" name="form" value="alcove"/>
            Alcove
        </label>
    </div>

      <button>Search</button>
        </aside>
    )
}