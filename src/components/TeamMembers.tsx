import React from 'react';

interface Member {
  name: string;
  description: string;
  avatarUrl: string;
  username: string;
  isCoFunder: boolean;
}

// Random team data (realistic but fake)
const members: Member[] = [
  {
    name: 'Dr. Sarah Chen',
    description: 'AI Research Lead with 12+ years in deep learning. Previously at Google Brain. Leads our LLM and computer vision initiatives.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    username: 'sarahchen',
    isCoFunder: true,
  },
  {
    name: 'Marcus Rodriguez',
    description: 'Full-stack architect and cloud specialist. Built scalable microservices for Fortune 500 companies. Passionate about Rust and WebAssembly.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'marcusrod',
    isCoFunder: true,
  },
  {
    name: 'Priya Kapoor',
    description: 'UX/UI design director. Creates intuitive interfaces for complex systems. Previously at Adobe and Figma.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
    username: 'priyakapoor',
    isCoFunder: false,
  },
  {
    name: 'James O\'Connor',
    description: 'DevOps engineer and security specialist. Manages CI/CD pipelines and infrastructure automation. Certified Kubernetes administrator.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    username: 'jamesoconnor',
    isCoFunder: false,
  },
  {
    name: 'Elena Vasquez',
    description: 'Mobile development lead (iOS & Android). Expert in React Native and Flutter. Contributes to open-source UI libraries.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
    username: 'elenav',
    isCoFunder: false,
  },
  {
    name: 'David Kim',
    description: 'Backend engineer specializing in high‑performance databases and real‑time systems. Loves Go and PostgreSQL.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    username: 'davidkim',
    isCoFunder: false,
  },
  {
    name: 'Nina Schmidt',
    description: 'Product manager and tech strategist. Bridges business goals with engineering execution. MBA from INSEAD.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
    username: 'ninams',
    isCoFunder: false,
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="team-showcase">
      <div className="content">
        <ul className="team">
          {members.map((member) => (
            <li
              key={member.username}
              className={`member ${member.isCoFunder ? 'co-funder' : ''}`}
            >
              <div className="thumb">
                <img src={member.avatarUrl} alt={member.name} />
              </div>
              <div className="description">
                <h3>{member.name}</h3>
                <p>
                  {member.description}
                  <br />
                  <a
                    href={`https://x.com/${member.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{member.username}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");

        .team-showcase {
          --accent-light: #f0abfc;
          --accent-hover: #e879f9;
          --dark-bg-start: #1e1028;
          --dark-bg-end: #2a1a35;
          --card-bg: linear-gradient(135deg, #1e1028 0%, #2a1a35 100%);
          --deg: -86deg;
          --trans: all 0.3s ease 0s;

          margin: 0;
          padding: 0;
          font-family: "Lato", Arial, Helvetica, serif;
          font-size: 1em;
        }

        .team-showcase *,
        .team-showcase *:before,
        .team-showcase *:after {
          box-sizing: border-box;
        }

        .team-showcase .content {
          width: 90vmin;
          margin: 0 auto;
        }

        .team-showcase .team {
          padding: 2em 0 2em 2.5em;
          margin: 0;
          list-style: none;
        }

        .team-showcase .member {
          margin: 1.5em 0 0.5em;
          padding: 0.73em;
          background: var(--card-bg);
          position: relative;
          display: block;
          transform: scale(0.85);
          transition: var(--trans);
          clear: both;
          border-radius: 0.75em;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          border-left: 6px solid var(--accent-light);
        }

        .team-showcase .member:nth-of-type(even) {
          text-align: right;
          border-left: none;
          border-right: 6px solid var(--accent-light);
        }

        .team-showcase .thumb {
          width: 13vmin;
          height: 13vmin;
          float: left;
          margin-right: 1.25em;
          background: linear-gradient(
            var(--deg),
            var(--dark-bg-start) 0 70%,
            var(--accent-light) 0% 100%
          );
          transform: rotate(-4deg);
          transition: var(--trans);
          border-radius: 0.5em;
          overflow: hidden;
          margin-left: -3em;
          padding: 0.5em;
        }

        .team-showcase .member:nth-of-type(even) .thumb {
          --deg: 86deg;
          float: right;
          margin-left: 2em;
          margin-right: -3em;
          transform: rotate(4deg);
        }

        .team-showcase .thumb img {
          width: 100%;
          height: 100%;
          border-radius: 0.25em;
          filter: grayscale(0.2);
          background: var(--dark-bg-start);
          object-fit: cover;
          transition: var(--trans);
        }

        .team-showcase .member:hover {
          transform: scale(1);
          transition: var(--trans);
          box-shadow: 0 0 25px rgba(240, 171, 252, 0.4);
          border-left-color: var(--accent-hover);
        }

        .team-showcase .member:nth-of-type(even):hover {
          border-right-color: var(--accent-hover);
        }

        .team-showcase .member:hover .thumb {
          padding: 0.1em;
          transition: var(--trans);
          transform: rotate(-1deg);
          --deg: -89deg;
        }

        .team-showcase .member:nth-of-type(even):hover .thumb {
          --deg: 91deg;
        }

        .team-showcase .member:hover .thumb img {
          filter: grayscale(0);
          transition: var(--trans);
        }

        .team-showcase .description {
          padding-top: 1vmin;
        }

        .team-showcase .description p {
          padding: 0 2em;
          margin-bottom: 1em;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
          line-height: 1.4;
        }

        .team-showcase h3 {
          background: linear-gradient(182deg, #fff0 60%, var(--dark-bg-end) 0 100%);
          display: inline-block;
          transform: rotate(-2deg);
          position: absolute;
          margin: 0;
          margin-top: -2.25em;
          left: 9vmin;
          padding: 0.5em 0.9em;
          color: var(--accent-light);
          border-radius: 0.5em;
          font-size: 1.35em;
          font-weight: bold;
          transform-origin: left bottom;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
          letter-spacing: 0.5px;
        }

        .team-showcase .member:nth-of-type(even) h3 {
          left: inherit;
          right: 9vmin;
          transform: rotate(2deg);
          transform-origin: right bottom;
          background: linear-gradient(-182deg, #fff0 60%, var(--dark-bg-end) 0 100%);
        }

        .team-showcase .member:hover h3 {
          transition: var(--trans);
          transform: rotate(0deg);
          background: linear-gradient(180deg, #fff0 59%, var(--dark-bg-end) 0 100%);
          color: var(--accent-hover);
        }

        .team-showcase .co-funder:after {
          content: "CO-FUNDER";
          font-size: 0.7em;
          position: absolute;
          top: -1.5em;
          background: var(--accent-light);
          right: 4em;
          transform: rotate(3deg);
          padding: 0.35em 0.9em 0.5em;
          border-radius: 2em;
          color: #1e1028;
          font-weight: bold;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .team-showcase .co-funder:nth-of-type(even):after {
          right: inherit;
          left: 4em;
          transform: rotate(-3deg);
        }

        .team-showcase .description p a {
          display: inline-block;
          margin: 0.5em 0 0 0;
          background: rgba(0, 0, 0, 0.4);
          color: var(--accent-light);
          padding: 0.2em 0.8em 0.35em;
          border-radius: 2em;
          text-decoration: none;
          transition: var(--trans);
          font-weight: 500;
          border: 1px solid var(--accent-light);
        }

        .team-showcase .description p a:hover {
          transition: var(--trans);
          color: #1e1028;
          background: var(--accent-hover);
          border-color: var(--accent-hover);
          font-weight: bold;
        }

        .team-showcase .member:after {
          content: "";
          display: table;
          clear: both;
        }

        /* ===== MOBILE OPTIMIZATIONS – BIGGER THUMBNAILS ===== */
        @media (max-width: 768px) {
          .team-showcase .content {
            width: 100%;
            padding: 0 1rem;
          }

          .team-showcase .team {
            padding: 1rem 0 1rem 1rem;
          }

          /* Remove scaling to avoid overlap and ensure bigger pictures */
          .team-showcase .member {
            transform: scale(1);
            margin: 1.5rem 0;
            padding: 1rem;
            border-left-width: 4px;
            border-right-width: 0;
          }

          .team-showcase .member:nth-of-type(even) {
            border-right-width: 4px;
            border-left-width: 0;
          }

          /* BIGGER THUMBNAIL: fixed size 100px on mobile */
          .team-showcase .thumb {
            width: 100px;
            height: 100px;
            margin-left: -1.5rem;
            margin-right: 1rem;
          }

          .team-showcase .member:nth-of-type(even) .thumb {
            margin-left: 1rem;
            margin-right: -1.5rem;
          }

          /* Reposition name tag to be below thumbnail, not overlapping */
          .team-showcase h3 {
            position: static;
            display: inline-block;
            margin-top: 0.5rem;
            margin-bottom: 0.75rem;
            left: auto;
            right: auto;
            transform: rotate(0deg);
            font-size: 1.25rem;
            padding: 0.3rem 1rem;
          }

          .team-showcase .member:nth-of-type(even) h3 {
            left: auto;
            right: auto;
            transform: rotate(0deg);
            text-align: left;
          }

          /* Adjust text padding */
          .team-showcase .description p {
            padding: 0 0.5rem;
            font-size: 0.9rem;
          }

          .team-showcase .description {
            padding-top: 0;
          }

          /* Badge positioning */
          .team-showcase .co-funder:after,
          .team-showcase .co-funder:nth-of-type(even):after {
            top: -1rem;
            right: 1rem;
            left: auto;
            transform: rotate(0deg);
            font-size: 0.7rem;
            padding: 0.2rem 0.8rem;
          }

          /* Hover effect on mobile (simple lift) */
          .team-showcase .member:hover {
            transform: translateY(-3px);
          }
        }

        /* Extra small devices (<=480px) – make thumbnail even bigger */
        @media (max-width: 480px) {
          .team-showcase .thumb {
            width: 85px;
            height: 85px;
            margin-left: -1rem;
          }
          .team-showcase .member:nth-of-type(even) .thumb {
            margin-right: -1rem;
          }
          .team-showcase h3 {
            font-size: 1.1rem;
          }
          .team-showcase .description p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamMembers;