export type SearchData = {
  name: string;
  id: number;
};

export type TSearchDataList = {
  searchDataList: SearchData[];
};

export type TSearchListFuncProps = {
  keyword: string;
  isSelected: boolean;
  handleMouseEnter: () => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type IsSelectedProps = {
  isSelected: boolean;
};
