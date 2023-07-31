import Link from 'next/link';
import React from 'react';

const SingleTeam = ({ team, memberPosition }) => {
  const { _id, photo, name, instagram } = team;
  return (
    <div className="col-xl-4 col-lg-4 col-md-6  wow tpfadeUp"
      data-wow-duration=".3s" data-wow-delay=".5s">
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb">
          <img className="w-100" src={`http://localhost:4000/members/${photo}`} alt="" />
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href={`/about-me/${_id}`}>
              {name}
            </Link>
          </h4>
          <h5 className="tp-team-sm-subtitle"><Link href="#">{ memberPosition }</Link></h5>
          <Link href={`https://instagram.com/${instagram}`}><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;