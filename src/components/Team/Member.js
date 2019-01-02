import React from 'react';
import {Col} from 'reactstrap';

const TeamMember = ({ member }) => {
    return (
        <div>
            <h4 className="mb-3">{member.name}</h4>
            <p className="para">{member.desc}</p>
        </div>
    );
}

export default TeamMember;