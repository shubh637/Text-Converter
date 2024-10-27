import React from "react";

export default function Alert({ alert }) {
  return (
    <div style={{ height: '50px' }}> {/* Fixed height */}
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}</strong> {alert.msg}
        </div>
      )}
    </div>
  );
}
