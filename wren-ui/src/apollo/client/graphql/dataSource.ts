import { gql } from '@apollo/client';

export const LIST_DATA_SOURCE_TABLES = gql`
  query ListDataSourceTables {
    listDataSourceTables {
      name
    }
  }
`;

export const AUTO_GENERATED_RELATIONS = gql`
  query AutoGeneratedRelations {
    autoGenerateRelation {
      id
      name
      relations {
        fromModelId
        fromModelReferenceName
        fromColumnId
        fromColumnReferenceName
        toModelId
        toModelReferenceName
        toColumnId
        toColumnReferenceName
        type
        name
      }
    }
  }
`;

export const SAVE_DATA_SOURCE = gql`
  mutation SaveDataSource($data: DataSourceInput!) {
    saveDataSource(data: $data) {
      type
      properties
    }
  }
`;

export const SAVE_TABLES = gql`
  mutation SaveTables($data: SaveTablesInput!) {
    saveTables(data: $data)
  }
`;

export const SAVE_RELATIONS = gql`
  mutation SaveRelations($data: SaveRelationInput!) {
    saveRelations(data: $data)
  }
`;
