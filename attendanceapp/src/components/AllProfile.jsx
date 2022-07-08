import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { Link,Navigate } from 'react-router-dom';
import "../Style/allprofile.css";


const PER_PAGE=6


function AllProfile() {

  const [currentPage,setcurrentPage]=useState(0);



  const [profiles, setProfiles] = useState([]);
  const [values,setValues]=useState({
    search:"",
    PageCount:"",
    filterData:[],
  });
  const [searchParam] = useState(["team", "username","email"]);
  
    useEffect(() => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };
      try {
        const fetchData = async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/profile-detail-list/`,
            config
          );
          setProfiles(data);
          setValues({
            ...values,
            PageCount: Math.ceil(data.length / PER_PAGE),
            filterData: data,
          });
        };
        fetchData();
      } catch (ex) {
        toast.error("You are not authorised!");
        return <Navigate to="/profile" />;
      }
    }, []);
   

 const Search=(search)=>{
   return profiles.filter((p) => {
     return searchParam.some((newP) => {
      let filterData =
        p[newP].toString().toLowerCase().indexOf(search.toLowerCase()) > -1;
       return filterData
     });
   });
 }

  const handlePageClick = ({selected:selectedPage}) => {
    setcurrentPage(selectedPage)
  };
  const onChange=(e)=>{
    let fdata = Search(e.target.value);
    setValues({
      ...values,
      filterData: fdata,
      PageCount: Math.ceil(fdata.length / PER_PAGE),
    });
    
  }

  const offset=currentPage*PER_PAGE


  const currentPageData = values.filterData
    .slice(offset, offset + PER_PAGE)
    .map(function ({
      id,
      username,
      photo,
      team,
      email,
      attendance,
      description,
    })
    
    {
      return (
        <div className="column">
          <div className="card">
            <img src={photo} className="image" />
            <div className="containerw">
              <h2 class="h">Name: {username}</h2>
              <p className="title">Team Number: {team}</p>
              <p>{description}</p>
              <p>Gmail: {email}</p>
              <p>Attendance: {attendance}</p>
              <Link to={"/user-profile/" + id.toString()} class="y">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      );
    });

  if (!localStorage.getItem("access")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ToastContainer />
      <h1
        class="py-3 text-5xl md:text-7xl font-bold"
        style={{ marginLeft: "200px" }}
      >
        PROFILE OF ALL THE EMPLOYEES{" "}
      </h1>
      <div class="search">
        <input
          type="search"
          class="searchTerm"
          placeholder="Enter the name or email or team no of intern"
          name="search"
          // value={values.search}
          onChange={(e) => onChange(e)}
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="row" style={{ margin: "30px" }}>
        {currentPageData}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={values.PageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />

      </div>
    </div>
  );
}
export default AllProfile;
