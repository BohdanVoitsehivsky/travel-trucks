"use client";
import { useState } from "react";
import { useCamperStore } from "@/store/useCampersStore";

export default function Filters() {
    const {setFilters, resetCampers, fetchCampers} = useCamperStore();
    const [location, setLocation] = useState("");
    const [form, setForm] = useState("");
    const [features, setFeatures] = useState<string[]>([]);
    const [transmission, setTransmission] = useState("");


    const toggleFeature = (feature: string) => {
        setFeatures(prev =>
             prev.includes(feature)
              ? prev.filter(f => f !== feature) 
        : [...prev, feature]);
    };


        const handleSearch = () => {
            resetCampers();
            setFilters({
                location,
                form,
                transmission,
                features,
            });
            fetchCampers();

        };
    
    return (
        <aside>
           <div>
        <label>Location</label>
        <input
         type="text"
          placeholder="Kyiv, Ukraine"
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          />
      </div> 

      <h2>Filters</h2>

    

      <div>
        <h3>Vehicle equipment</h3>

        <label>
          <input 
          type="checkbox"
           checked={features.includes("AC")}
           onChange={() => toggleFeature("AC")}
            />
          AC
        </label>

        <label>
  <input
    type="radio"
    name="transmission"
    value="automatic"
    checked={transmission === "automatic"}
    onChange={() => setTransmission("automatic")}
  />
  Automatic
</label>

<label>
  <input
    type="radio"
    name="transmission"
    value="manual"
    checked={transmission === "manual"}
    onChange={() => setTransmission("manual")}
  />
  Manual
</label>

        

        <label>
          <input
            type="checkbox"
            checked={features.includes("kitchen")}
            onChange={() => toggleFeature("kitchen")}
          />
          Kitchen
        </label>

        <label>
          <input
            type="checkbox"
            checked={features.includes("TV")}
            onChange={() => toggleFeature("TV")}
          />
          TV
        </label>
      

        <label>
          <input
            type="checkbox"
            checked={features.includes("bathroom")}
            onChange={() => toggleFeature("bathroom")}
          />
         Bathroom
        </label>
      </div>

      <div>
        <h3>Vehicle type</h3>

        <label>
            <input 
            type="radio"
             name="form" 
             value="van"
             checked= { form === "van" }
             onChange={()=> setForm("van")}
             />
            Van
        </label>

        <label>
            <input
             type="radio" 
             name="form" 
             value="fully-integrated"
             checked= { form === "fully-integrated" }
             onChange={()=> setForm("fully-integrated")}
             
             />
           Fully Integrated
        </label>

        <label>
            <input 
            type="radio"
            name="form"
            value="alcove"
            checked={form === "alcove"}
            onChange={() => setForm("alcove")}
            />
            Alcove
        </label>
    </div>

      <button onClick={handleSearch}>Search</button>
        </aside>
    )
}