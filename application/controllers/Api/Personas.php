<?php

require APPPATH . 'libraries/REST_Controller.php';

class Personas extends REST_Controller {

   public function __construct() {
      parent::__construct();
      $this->load->database();
   }

   public function index_get($id = 0) {
      try {
         if (!empty($id)) {
            $data = $this->db->get_where("personas", array('id_persona' => $id))->row_array();
            if (!$data) {
               throw new Exception("Persona no encontrada");
            }
         } else {
            $data = $this->db->get("personas")->result();
         }

         $response = array(
            "status"    => "ok",
            "message"   => "PERSONAS recuperadas",
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
         $persona = json_decode($json, true);

         // Verificar si se recibió JSON válido
         if (!$persona) {
            throw new Exception("Datos inválidos. No se pudo procesar el JSON.");
         }

         // Insertar datos en la tabla 'personas'
         $insert = $this->db->insert('personas', $persona);
         
         if ($insert) {
            // Obtener el ID de la persona recién insertada
            $id = $this->db->insert_id();
            
            $data = array(
               "status"    => "ok",
               "message"   => "Persona agregada",
               "data"      => array(
                  "id_persona" => $id
               )
            );
            $this->response($data, REST_Controller::HTTP_OK);
         } else {
            throw new Exception("Error al agregar la persona.");
         }

      } catch (Exception $e) {
         $this->response(array(
            "status" => "error",
            "message" => $e->getMessage()
         ), REST_Controller::HTTP_BAD_REQUEST);
      }
   }

   public function index_put($id) {
      try {
         $json = $this->input->raw_input_stream;
         $persona = json_decode($json, true);

         if (!$persona) {
            throw new Exception("Datos inválidos. No se pudo procesar el JSON.");
         }

         // Actualizar la persona por ID
         $update = $this->db->update('personas', $persona, array('id_persona' => $id));
         
         if ($update) {
            $data = array(
               "status"    => "ok",
               "message"   => "Persona actualizada"
            );
            $this->response($data, REST_Controller::HTTP_OK);
         } else {
            throw new Exception("Error al actualizar la persona o ID no encontrado.");
         }

      } catch (Exception $e) {
         $this->response(array(
            "status" => "error",
            "message" => $e->getMessage()
         ), REST_Controller::HTTP_BAD_REQUEST);
      }
   }

   public function index_delete($id) {
      try {
         // Eliminar persona por ID
         $delete = $this->db->delete('personas', array('id_persona' => $id));
         
         if ($delete && $this->db->affected_rows() > 0) {
            $data = array(
               "status"    => "ok",
               "message"   => "Persona eliminada"
            );
            $this->response($data, REST_Controller::HTTP_OK);
         } else {
            throw new Exception("Persona no encontrada o no se pudo eliminar.");
         }

      } catch (Exception $e) {
         $this->response(array(
            "status" => "error",
            "message" => $e->getMessage()
         ), REST_Controller::HTTP_BAD_REQUEST);
      }
   }
}
