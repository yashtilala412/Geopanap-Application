insert into ec_documents (ec_id, path, size, mime_type, created_at) values({{variables.viewECId}}, '{{variables.viewECDocumentPath}}', '{{variables.viewECDocumentSize}}', '{{variables.viewECDocumentMimeType}}', current_timestamp);