<?php

require APPPATH . 'libraries/REST_Controller.php';

class Mobiliario extends REST_Controller {
    
    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    
    public function __construct() {
        parent::__construct();
        $this->load->database();

        // Configuración de CORS
        header('Access-Control-Allow-Origin: *'); // Permitir acceso desde cualquier origen con el asterrisco
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); // TODOS Métodos permitidos
        header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Encabezados permitidos
    }

    
        public function index_get($id = 0) {
           try {
              if (!empty($id)) {
                 $data = $this->db->get_where("mobiliario", array('id_mobiliario' => $id))->row_array();
                 if (!$data) {
                    throw new Exception("Mobiliario no encontrado");
                 }
              } else {
                 $data = $this->db->get("mobiliario")->result();
              }
     
              $response = array(
                 "status"    => "ok",
                 "message"   => "Mobiliario recuperados",
                 "data"      => $data
              );
              $this->response($response, REST_Controller::HTTP_OK);
     
           } catch (Exception $e) {
              $this->response(array(
                 "status" => "error",
                 "message" => $e->getMessage()
              ), REST_Controller::HTTP_BAD_REQUEST);
           }
        }
     
        public function index_post() {
           try {
              $json = $this->input->raw_input_stream;
              $mobiliario = json_decode($json, true);
     
              // Verificar si se recibió JSON válido
              if (!$mobiliario) {
                 throw new Exception("Datos inválidos. No se pudo procesar el JSON.");
              }
     
              // Verificar si el campo 'codigo' está presente
              if (!isset($mobiliario['codigo'])) {
                 throw new Exception("Falta el campo requerido: 'codigo'.");
              }
     
              // Verificar duplicados en 'codigo'
              $this->db->where('codigo', $mobiliario['codigo']);
              $query = $this->db->get('mobiliario');
              
              if ($query->num_rows() > 0) {
                 throw new Exception("El código ya existe, por favor elige otro.");
              }
     
              // Insertar datos si no hay duplicados
              $this->db->insert('mobiliario', $mobiliario);
              
              $data = array(
                 "status"    => "ok",
                 "message"   => "Mobiliario agregado"
              );
              $this->response($data, REST_Controller::HTTP_OK);
     
           } catch (Exception $e) {
              $this->response(array(
                 "status" => "error",
                 "message" => $e->getMessage()
              ), REST_Controller::HTTP_BAD_REQUEST);
           }
        }
     
        public function index_put($id) {
           try {
              $input = $this->put();
     
              if (!$input) {
                 throw new Exception("Datos inválidos");
              }
     
              // Verificar duplicados en 'codigo' (al actualizar, no se verifica 'id_mobiliario')
              $this->db->where('codigo', $input['codigo']);
              $this->db->where('id_mobiliario !=', $id);  // Excluir el id actual
              $query = $this->db->get('mobiliario');
              
              if ($query->num_rows() > 0) {
                 throw new Exception("El código ya existe, por favor elige otro.");
              }
     
              $this->db->update('mobiliario', $input, array('id_mobiliario' => $id));
              
              $data = array(
                 "status"    => "ok",
                 "message"   => "Mobiliario actualizado"
              );
              $this->response($data, REST_Controller::HTTP_OK);
     
           } catch (Exception $e) {
              $this->response(array(
                 "status" => "error",
                 "message" => $e->getMessage()
              ), REST_Controller::HTTP_BAD_REQUEST);
           }
        }
     
        public function index_delete($id) {
           try {
              $this->db->delete('mobiliario', array('id_mobiliario' => $id));
     
              if ($this->db->affected_rows() == 0) {
                 throw new Exception("Mobiliario no encontrado");
              }
     
              $data = array(
                 "status"    => "ok",
                 "message"   => "Mobiliario eliminado"
              );
              $this->response($data, REST_Controller::HTTP_OK);
     
           } catch (Exception $e) {
              $this->response(array(
                 "status" => "error",
                 "message" => $e->getMessage()
              ), REST_Controller::HTTP_BAD_REQUEST);
           }
        }
     
     }
     