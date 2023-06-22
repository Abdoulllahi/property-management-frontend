import axios from "axios";

const dataProvider = {
    getList: async (resource, params) => {
      const token = localStorage.getItem('adminToken');
  
      try {
        let url;
  
        if (resource === 'properties') {
          url = 'http://localhost:8080/v1/api/property';
        } else {
          url = `http://localhost:8080/v1/api/admin/${resource}`;
        }
  
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        return {
          data: response.data,
          total: response.data.length,
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
      },
      getOne: async (resource, params) => {
          const token = localStorage.getItem('adminToken');
          const { id } = params;
      
          try {
            let url;
      
            if (resource === 'customers' || resource === 'owners') {
              url = `http://localhost:8080/v1/api/users/${id}`;
            } else if (resource === 'properties') {
              url = `http://localhost:8080/v1/api/property/${id}`;
            } else {
              throw new Error(`Unknown resource: ${resource}`);
            }
      
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            return {
              data: response.data,
            };
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
          }
      },
      
      deleteMany: async (resource, params) => {
          const { ids } = params;
      
          try {
            const token = localStorage.getItem('adminToken');
      
            const deleteRequests = ids.map(async (id) => {
              const url = `http://localhost:8080/v1/api/admin/users/${id}`;
              await axios.delete(url, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return id;
            });
      
            await Promise.all(deleteRequests);
      
            return {
              data: ids,
            };
          } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
          }
      },
      
        };
  
export default dataProvider;