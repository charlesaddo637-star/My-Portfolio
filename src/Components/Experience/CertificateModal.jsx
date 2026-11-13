export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}) {
  if (!isOpen || !certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>{certificate.title}</h2>

        <iframe
          src={certificate.pdf}
          title={certificate.title}
          className="certificate-frame"
        />

        <div className="modal-actions">
          <a
            href={certificate.pdf}
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            Open Certificate
          </a>
        </div>
      </div>
    </div>
  );
}