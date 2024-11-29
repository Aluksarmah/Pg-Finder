import React, { useState } from "react";
import { roomItems } from "../data/Data";
import { useRecoilValue, useRecoilState } from "recoil";
import { searchTermState } from "../data/Data"

export default function Book() {

  // const roomItemsLocal = useRecoilValue(roomItems);

  const [searchItem, setSearchItem] = useRecoilState(searchTermState);
  // const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  // const filteredRooms = rooms.filter((room) =>
  //   room.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-12">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input
                        value={searchItem}
                        onChange = {
                          (e) => setSearchItem(e.target.value)
                        }
                        type="text"
                        className="form-control datetimepicker-input"
                        placeholder="Search your perfect PG"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
