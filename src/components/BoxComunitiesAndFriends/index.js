import { ProfileRelationsBoxWrapper } from "../ProfileRelations";

const BoxComunitiesAndFriends = ({ title, data }) => {
  const LimitItems = 6;
  const limitedData = data.filter((item, i) => i < 6);

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({data.length})
      </h2>
      <ul>
        {limitedData.map((itemAtual, index) => {
          return (
            <li key={index}>
              <a
                href={`${
                  itemAtual.title ? `/users/${itemAtual.title}` : { itemAtual }
                }`}
              >
                <img
                  src={`${
                    itemAtual.image
                      ? itemAtual.image
                      : `https://github.com/${itemAtual}.png`
                  }`}
                />
                <span>{itemAtual.title ? itemAtual.title : itemAtual}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
};

export default BoxComunitiesAndFriends;
