function fallo(e){
				switch (e.target.error.code) {
				case e.target.error.MEDIA_ERR_ABORTED:
				alert('Has abortado el playback.');
				break;
				case e.target.error.MEDIA_ERR_NETWORK:
				alert('Error en la red.');
				break;
				case e.target.error.MEDIA_ERR_DECODE:
				alert('Problema con los Codecs.');
				break;
				case
				e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
				alert(
				'Formato no soportado o archivo no encontrado.');
				break;
				default:
				alert('Ha ocurrido un error desconocido.');
				break;
				}
			};