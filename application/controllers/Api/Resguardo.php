<?php

require APPPATH . 'libraries/REST_Controller.php';

class Resguardo extends REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function index_get($id = 0) {
        try {
            if (!empty($id)) {
                $data = $this->db->get_where("resguardo", array('id_resguardo' => $id))->row_array();
                if (!$data) {
                    throw new Exception("Resguardo no encontrado con el ID proporcionado");
                }
            } else {
                $data = $this->db->get("resguardo")->result();
            }

            $response = array(
                "status"    => "ok",
                "message"   => "Resguardo(s) recuperado(s)",
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
            $resguardo = json_decode($json, true);

            if (!$resguardo) {
                throw new Exception("Datos JSON inválidos.");
            }

            if (isset($resguardo['id_persona'], $resguardo['id_mobiliario'], $resguardo['fecha_asignacion'])) {
                $this->db->insert('resguardo', $resguardo);
                if (!$this->db->affected_rows()) {
                    throw new Exception("Error al insertar el resguardo.");
                }

                $insert_id = $this->db->insert_id(); 
                $response = array(
                    "status" => "ok",
                    "message" => "Resguardo agregado",
                    "data" => array(
                        "id_resguardo" => $insert_id
                    )
                );
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                throw new Exception("Campos faltantes en el resguardo");
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
            if (empty($id)) {
                throw new Exception("ID de resguardo no proporcionado.");
            }

            $json = $this->input->raw_input_stream;
            $resguardo = json_decode($json, true);

            if (!$resguardo) {
                throw new Exception("Datos JSON inválidos.");
            }

            if (isset($resguardo['id_persona'], $resguardo['id_mobiliario'], $resguardo['fecha_asignacion'])) {
                $this->db->update('resguardo', $resguardo, array('id_resguardo' => $id));
                if (!$this->db->affected_rows()) {
                    throw new Exception("Error al actualizar el resguardo o no se encontró el registro.");
                }

                $response = array(
                    "status"    => "ok",
                    "message"   => "Resguardo actualizado"
                );
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                throw new Exception("ID incorrecto o campos faltantes");
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
            if (empty($id)) {
                throw new Exception("ID faltante o incorrecto.");
            }

            $this->db->delete('resguardo', array('id_resguardo' => $id));
            if (!$this->db->affected_rows()) {
                throw new Exception("Error al eliminar el resguardo o no se encontró el registro.");
            }

            $response = array(
                "status"    => "ok",
                "message"   => "Resguardo eliminado"
            );
            $this->response($response, REST_Controller::HTTP_OK);
        } catch (Exception $e) {
            $this->response(array(
                "status" => "error",
                "message" => $e->getMessage()
            ), REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
