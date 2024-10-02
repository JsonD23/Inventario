<?php

require APPPATH . 'libraries/REST_Controller.php';

class Ubicacion extends REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function index_get($id = 0) {
        try {
            if (!empty($id)) {
                $data = $this->db->get_where("ubicacion", array('id_ubicacion' => $id))->row_array();
                if (!$data) {
                    throw new Exception("Ubicación no encontrada con el ID proporcionado");
                }
            } else {
                $data = $this->db->get("ubicacion")->result();
            }

            $response = array(
                "status"    => "ok",
                "message"   => "Ubicaciones recuperadas",
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
            $ubicacion = json_decode($json, true);

            if (!$ubicacion) {
                throw new Exception("Datos JSON inválidos.");
            }

            $this->db->insert('ubicacion', $ubicacion);
            if (!$this->db->affected_rows()) {
                throw new Exception("Error al insertar la ubicación.");
            }

            $response = array(
                "status" => "ok",
                "message" => "Ubicación agregada"
            );
            $this->response($response, REST_Controller::HTTP_OK);
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
                throw new Exception("ID de ubicación no proporcionado.");
            }

            $json = $this->input->raw_input_stream;
            $ubicacion = json_decode($json, true);

            if (!$ubicacion) {
                throw new Exception("Datos JSON inválidos.");
            }

            $this->db->update('ubicacion', $ubicacion, array('id_ubicacion' => $id));
            if (!$this->db->affected_rows()) {
                throw new Exception("Error al actualizar la ubicación o no se encontró el registro.");
            }

            $response = array(
                "status" => "ok",
                "message" => "Ubicación actualizada"
            );
            $this->response($response, REST_Controller::HTTP_OK);
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
                throw new Exception("ID de ubicación faltante o incorrecto.");
            }

            $this->db->delete('ubicacion', array('id_ubicacion' => $id));
            if (!$this->db->affected_rows()) {
                throw new Exception("Error al eliminar la ubicación o no se encontró el registro.");
            }

            $response = array(
                "status" => "ok",
                "message" => "Ubicación eliminada"
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
